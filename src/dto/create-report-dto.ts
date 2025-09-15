import { ApiProperty } from '@nestjs/swagger';

export class CreateReportDto {
	@ApiProperty({ example: 3000 })
	amount: number;

  @ApiProperty({ example: 'udemy'})
  source: string;
}
