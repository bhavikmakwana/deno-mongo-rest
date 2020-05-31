import db from "../DB/mongo.ts";
import IYuvakProfile from "../entity/IYuvakProfile.ts";

class YuvakPofileRepository {
  constructor() {}
  readonly database = db.getDatabase;
  readonly yuvakProfileCollection = this.database.collection("YuvakProfile");

  async find() {
    const yuvak = await this.yuvakProfileCollection.find();
    return yuvak;
  }

  async insertOne(yuvakProfile: IYuvakProfile) {
    const { $oid } = await this.yuvakProfileCollection.insertOne(yuvakProfile);
    return $oid;
  }
}

export default YuvakPofileRepository;
