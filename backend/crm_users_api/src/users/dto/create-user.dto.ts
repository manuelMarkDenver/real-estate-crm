import { IsString, IsOptional, IsNotEmpty, IsEmail } from 'class-validator';

export class CreateUserDto {
  @IsString()
  @IsNotEmpty()
  firstName: String;

  @IsString()
  @IsNotEmpty()
  lastName: String;

  @IsString()
  @IsNotEmpty()
  @IsEmail()
  email: String;

  @IsString()
  @IsOptional()
  password: String;

  @IsString()
  @IsOptional()
  googleId: String;

  @IsString()
  role: String;
}
