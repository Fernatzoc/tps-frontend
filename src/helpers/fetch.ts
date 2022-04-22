import axios from "axios";

const baseURL: string | undefined = process.env.BASE_URL;

export const fetchWithoutToken = (
  endPoint: string,
  data: {},
  method: string
): Promise<Response> | any => {
  const url: string = `${baseURL}/${endPoint}`;
  console.log(JSON.stringify(data));
  switch (method) {
    case "GET":
      return axios.get(url);

    case "POST":
      return axios.post(url, JSON.stringify(data), {
        headers: {
          "Content-type": "application/json;charset=UTF-8",
        },
      });

    case "PUT": {
      return axios.put(url, JSON.stringify(data), {
        headers: {
          "Content-type": "application/json;charset=UTF-8",
        },
      });
    }

    case "DELETE": {
      return axios.delete(url);
    }

    default:
      return 0;
  }
};

export const fetchWithToken = (
  endPoint: string,
  data: any = "",
  method: string
): Promise<Response> | number => {
  const url: string = `${baseURL}/${endPoint}`;
  const token: string = localStorage.getItem("token") || "";

  switch (method) {
    case "GET":
      return axios.get(url, {
        headers: { Authorization: `Bearer ${token}` },
      });

    case "POST":
      return axios.post(url, JSON.stringify(data), {
        headers: { Authorization: `Bearer ${token}` },
      });
    default:
      return 0;
  }
};
