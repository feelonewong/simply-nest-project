import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthService {
  constructor() {}
  login(re) {
    return re;
  }
  register(a) {
    return a;
  }
}
