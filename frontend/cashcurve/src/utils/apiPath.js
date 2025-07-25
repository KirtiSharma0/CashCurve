export const BASE_URL = "https://localhost:8000";

//utils/apipaths.js
export const API_PATHS =  {
    AUTH: {
        LOGIN: "/api/v1/auth/login",
        REGISTER: "/api/v1/auth/register",
        GET_USER_INFO: "/api/v1/auth/getUser",
    },
    DASHBOARD: {
        GET_DATA: "/api/v1/dashboard",
    },
    INCOME: {
        ADD_INCOME: "/api/v1/income/add",
        GET_ALL_INCOME: "api/v1/income/get",
        DELETE_INCOME: (incomeID) => `/api/v1/income/${incomeID}`,
        DOWNLOAD_INCOME: `/api/v1/income/downloadexcel` ,
    },
    EXPENSE:{
        ADD_EXPENSE: "/api/v1/expense/add",
        GET_ALL_EXPENSE: "/api/v1/expense/delete",
        DELETE_EXPENSE: (expenseID) => `/api/v1/expense/${expenseID}`,
        DOWNLOAD_EXPENSE: `/api/v1/expense/downlaodexcel`,
    },
    IMAGE: {
        UPLOAD_IMAGE: "/api/v1/auth/upload-image",
    }
}