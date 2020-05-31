import YuvakProfileReposiotry from "../repository/YuvakProfileRepository.ts";
import IYuvakProfile from "../entity/IYuvakProfile.ts";
class YuvakProfileService {
  readonly yuvakProfileRepository = new YuvakProfileReposiotry();
  getYuvakProfile = async () => {
    return await this.yuvakProfileRepository.find();
  };

  createProfile = async (yuvak: IYuvakProfile) => {
    return await this.yuvakProfileRepository.insertOne(yuvak);
  };
}

export default YuvakProfileService;
