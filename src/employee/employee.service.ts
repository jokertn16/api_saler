import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { ExceptionStoreProcedure } from "src/utils.common/utils.exception.common/utils.store-procedure-exception.common";
import { Repository } from "typeorm";
import { Employee } from "./employee.entity/employee.entity";

@Injectable()
export class EmployeeService {
  constructor(
    @InjectRepository(Employee)
    private employeeRepository: Repository<Employee>
  ) {}

  async findOne(id: number): Promise<Employee> {
    let employee: Employee = await this.employeeRepository.findOne(id);
    ExceptionStoreProcedure.validate(employee);
    return employee;
  }
}


