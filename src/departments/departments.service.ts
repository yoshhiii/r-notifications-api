import { Model } from 'mongoose';
import { Component, Inject } from '@nestjs/common';
import { Department } from '../interfaces/department.interface';
import { DepartmentDto } from '../dto/department.dto';

@Component()
export class DepartmentsService {
  constructor(
    @Inject('DepartmentModelToken') private readonly departmentModel: Model<Department>) {}

  async create(departmentDto: DepartmentDto): Promise<Department> {
    const createdDepartment = new this.departmentModel(departmentDto);
    return await createdDepartment.save();
  }

  async findAll(): Promise<Department[]> {
    return await this.departmentModel.find().exec();
  }
}