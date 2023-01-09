import axios from "axios";
import { REACT_APP_BASE_URL } from "@env";

const operatorEndpoint = `${REACT_APP_BASE_URL}/api/operator`;
const aadhaarEndpoint = `${REACT_APP_BASE_URL}/api/aadhaar`;
const mobileAppFieldsEndpoint = `${REACT_APP_BASE_URL}/api/get_mobile_app_fields`;

export async function getOperatorAPI(firebaseUid) {
    const apiResponse = await axios.get(`${operatorEndpoint}/?firebase_uid=${firebaseUid}`);
    if (apiResponse.status === 200 && apiResponse.data && apiResponse.data.length > 0) return apiResponse.data[0];
    return null;
}

export async function getAadhaarAPI(phoneNumber) {
    const apiResponse = await axios.get(`${aadhaarEndpoint}/?phone_number=${phoneNumber}`);
    if (apiResponse.status === 200 && apiResponse.data && apiResponse.data.length > 0) return apiResponse.data[0];
    else return null;
}

export async function getMobileAppFieldsAPI(phoneNumber) {
    const apiResponse = await axios.post(mobileAppFieldsEndpoint, { "customer_phone": phoneNumber });
    if (apiResponse.status === 200 && apiResponse.data) return apiResponse.data;
    else return null;
}
