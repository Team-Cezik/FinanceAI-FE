import { BaseApi } from "./base-api";

export class LotApi extends BaseApi{
    public async GetLotDetail(id:number){
       return await this.axios.get(`${this.basePath}/lot/${id}`)
    }

    public async GetLots(){
        return await this.axios.get(`${this.basePath}/lot`)
     }
}