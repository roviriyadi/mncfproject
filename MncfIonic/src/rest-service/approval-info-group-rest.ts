import { Injectable } from '@angular/core';
import { Http, Headers , RequestOptions } from '@angular/http';
import { JsonConvert , OperationMode ,ValueCheckingMode } from "json2typescript"
import 'rxjs/add/operator/map';
import { BaseRestService } from './base-rest-service';
import { Observable } from 'rxjs/Observable';
import { BASE_API_URL, API_APPROVAL_INFO_GROUP } from '../my-config/api-config';
import { ApiResponse } from '../models/api-response';
import { Md5 } from 'ts-md5/dist/md5';

@Injectable()
export class ApprovalInfoGroupRest extends BaseRestService{

    constructor(public http: Http) {
        super(http);
    }

    getRows() {
        return new Promise((resolve,reject) => {
            this.httpGet(BASE_API_URL+API_APPROVAL_INFO_GROUP+"GetRows",null)
            .then((response: ApiResponse)=>{
                return resolve(response);
            })
            .catch((error: ApiResponse)=>{
                return reject(error);
            });
        });
    }

    getRowsByGroup(kodeApprovalGroup) {
        return new Promise((resolve,reject) => {
            this.httpGet(BASE_API_URL+API_APPROVAL_INFO_GROUP+"GetRows?kodeApprovalGroup="+kodeApprovalGroup,null)
            .then((response: ApiResponse)=>{
                return resolve(response);
            })
            .catch((error: ApiResponse)=>{
                return reject(error);
            });
        });
    }

}