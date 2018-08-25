const axios = require('axios'); 

const miaSearchForDepartment = axios.create({
  baseURL: 'https://search.artsmia.org/%20department:',
});

const miaImage = axios.create({
  baseURL: 'https://api.artsmia.org/images',
})

module.exports = {
  async searchForDepartment(query) {
    return miaSearchForDepartment.get(`/${query}`)
      .then(response => response.data)
      .catch(err => err);
  },
  async getImage(id, size = 'small') {
    return miaImage.get(`/${id}/${size}.jpg`)
      .then(response => response.data)
      .catch(err => err);
  }
}