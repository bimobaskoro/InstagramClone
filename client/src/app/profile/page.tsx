import React from "react";
import NavbarComponent from "./_component/navbar";
import TabsComponent from "./_component/tabs";
import Image from "next/image";
import FooterComponent from "./_component/footer";
export default function profile() {
  return (
    <>
      <div className="flex">
        <div>
          <FooterComponent />
        </div>
        <div className="w-full">
          <div className="md:hidden">
            <NavbarComponent />
          </div>
          <div className="w-full">
            <div className="flex justify-between p-5">
              <div>
                <Image
                  src="/images/dummy.jpg"
                  width="77"
                  height="77"
                  alt=""
                  className="rounded-full md:w-[150px] md:h-[150px]"
                />
              </div>
              <div className="section-profile-right-header">
                <div className="md:flex">
                  <div className="md:h-[40px]">
                    <div>Lorem Ipsum</div>
                  </div>
                  <div className="button-section flex pt-1 pb-1 mt-3 md:mt-0 md:h-[40px]">
                    <button className="button-profile bg-[#EFEFEF] font-semibold h-[32px] w-[83px] text-[14px] mr-2 rounded-[5px]">
                      <center>
                        <div className="bt-ep w-[50px] leading-[14px]">
                          Edit profile
                        </div>
                      </center>
                    </button>
                    <button className="button-profile bg-[#EFEFEF] font-semibold h-[32px] w-[83px] text-[14px] leading-[14px] rounded-[5px]">
                      <div>View archive</div>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="text-[14px] pb-3">
              <p className="font-bold pl-5 ">Lorem Ipsum</p>
              <p className="pl-5 ">Lorem Ipsum</p>
            </div>
          </div>

          <div className="w-full text-[14px] border-t-[#DBDBDB] border-b-[#DBDBDB] border-solid border pt-2 pb-2">
            <div className="flex justify-between">
              <div className="flex-col w-full">
                <center>
                  <p className="font-bold">1</p>
                  <p className="text-[#737373]">posts</p>
                </center>
              </div>
              <div className="flex-col w-full">
                <center>
                  <p className="font-bold">900</p>
                  <p className="text-[#737373]">followers</p>
                </center>
              </div>
              <div className="flex-col w-full">
                <center>
                  <p className="font-bold">10</p>
                  <p className="text-[#737373]">following</p>
                </center>
              </div>
            </div>
          </div>
          <div>
            <TabsComponent />
          </div>
          <div className="md:hidden">
            <FooterComponent />
          </div>
        </div>
      </div>
    </>
  );
}
