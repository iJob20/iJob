export class CreateJobDto {
  constructor(
    public title: string,
    public description: string,
    public location: string,
    public salary: number,
    public recruiterId: string,
    public companyId: string
  ) {}
}
