import { JsonObject, JsonProperty } from "json2typescript";

@JsonObject
export class ApprovalStatus {

    @JsonProperty("_id", String, false)
    _id: string;

    @JsonProperty("kode", String, false)
    kode: string;

    @JsonProperty("kodeStatus", String, false)
    kodeStatus: string;

    @JsonProperty("nama", String, false)
    nama: string;

    @JsonProperty("icon", String, false)
    icon: string;

}