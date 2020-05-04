import { axiosClient } from '../config/axiosClient';

const signUpEndpoint = '/event/sign-up';

export class EventApi {
  async signUp(user) {
    try {
      const response = await axiosClient.post(signUpEndpoint, user);
      return response.data;
    } catch (error) {
      throw error;
    }
  }
}