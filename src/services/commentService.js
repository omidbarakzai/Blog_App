import http from "./httpService";

export async function createCommentApi(data, options = {}) {
  return http.post(`/comment/add`, data, options).then(({ data }) => data);
}

export async function getAllCommentsApi(options = {}) {
  try {
    const response = await http.get(`/comment/list`, options);

    // بررسی اینکه مقدار response و data معتبر باشد
    if (!response || !response.data || !response.data.data) {
      throw new Error("Invalid response structure");
    }

    return response.data.data;
  } catch (error) {
    console.error("Error fetching comments:", error);
    return []; // مقدار پیش‌فرض برای جلوگیری از خطا در جاهای دیگر
  }
}

export async function deleteCommentApi(id, options = {}) {
  return http
    .delete(`/comment/remove/${id}`, options)
    .then(({ data }) => data.data);
}

export async function updateCommentApi({ id, data }, options = {}) {
  return http
    .patch(`/comment/update/${id}`, data, options)
    .then(({ data }) => data.data);
}

const commentApi = {
  createCommentApi,
  getAllCommentsApi,
  updateCommentApi,
};

export default commentApi;
