import { Request } from "express";
import { prisma } from "../lib/prisma";
import { TUser } from "../model/user.model";
import { connect } from "http2";
import { Prisma } from "@prisma/client";
import { comparePassword, hashPassword } from "../lib/bcrypt";
import { createToken } from "../lib/jwt";
import { compare } from "bcrypt";
class UserService {
  public model = prisma.userAccount;

  async getAll(req: Request) {
    return await this.model.findMany({
      include: {
        userData: true,
      },
    });
  }

  async login(req: Request) {
    const { email, password } = req.body;
    const data = await this.model.findFirst({
      where: {
        email: email,
      },
    });
    if (!data) throw new Error("Invalid email");

    const check = await compare(password, String(data.password));
    if (!check) throw new Error("Invalid email");
    return createToken(data, "1hr");
  }
  async register(req: Request) {
    await prisma.$transaction(async (prisma) => {
      try {
        const {
          username,
          firstName,
          lastName,
          email,
          password,
          phone,
          gender,
          countryId,
          verifyCode,
        } = req.body;
        const userdata: Prisma.UserDataCreateInput = {
          username,
          gender,
          country: {
            connect: {
              id: Number(countryId),
            },
          },
        };
        const user = await prisma.userData.create({
          data: userdata,
        });

        const hashPass = await hashPassword(password);
        const data: Prisma.UserAccountCreateInput = {
          firstName,
          lastName,
          password: hashPass,
          email,
          phone,
          verifyCode,
          userData: {
            connect: {
              id: user.id,
            },
          },
        };
        await prisma.userAccount.create({
          data,
        });
      } catch (error) {
        if (error instanceof Error) throw new Error(error.message);
      }
    });
  }
}
export default new UserService();
