import {USER_DATA_API} from '../../config/urls';
import {apiPost} from '../../utils/utils';

export function infiniteData(data) {
  return new Promise((resolve, reject) => {
    apiPost(USER_DATA_API, data)
      .then(res => {
        resolve(res);
      })
      .catch(error => {
        reject(error);
      });
  });
}
