import {
  HandlerFunc,
  Context,
} from "https://deno.land/x/abc@v1.0.0-rc2/mod.ts";
import YuvakProfileService from "../services/YuvakProfileService.ts";
import IYuvakProfile from "../entity/IYuvakProfile.ts";

const yuvakProfileService = new YuvakProfileService();
export const addtYuvakProfile: HandlerFunc = async (ctx: Context) => {
  console.log(ctx.body());
  const yuvak: IYuvakProfile = {
    "aksharconnectId": "124",
    "name": "Bhavik",
    "mobile": "8080838365",
    "sabha": "Suvas",
  };
  await yuvakProfileService.createProfile(yuvak);
};
