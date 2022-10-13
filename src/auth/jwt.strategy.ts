import {
  Injectable
} from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { ExtractJwt, Strategy } from "passport-jwt";
import { Employee } from "src/employee/employee.entity/employee.entity";
import { EmployeeService } from "src/employee/employee.service";

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(private employeeService: EmployeeService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: process.env.SECRET_TOKEN,
    });
  }

  async validate(generateToken): Promise<Employee> {
    let user: Employee;
    user = await this.employeeService.findOne(generateToken.user_id);
    return user;
  }
}
