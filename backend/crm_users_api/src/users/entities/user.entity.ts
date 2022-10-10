import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Schema as MongooseSchema } from 'mongoose';
import { ApiProperty } from '@nestjs/swagger';

export type UserDocument = User & Document;

@Schema({ collection: 'users', timestamps: true })
export class User {
  @ApiProperty({
    example: 'John',
    description: 'User First Name ',
  })
  @Prop({ type: String, required: true })
  firstName?: string;

  @ApiProperty({
    example: 'Doe',
    description: 'User Last Name ',
  })
  @Prop({ type: String, required: true })
  lastName?: string;

  @ApiProperty({
    example: 'test@test.com',
    description: 'User Email ',
  })
  @Prop({ type: String, required: true })
  email?: string;

  @ApiProperty({
    example: 'password',
    description: 'User Password',
  })
  @Prop({ type: String})
  password?: string;

  @ApiProperty({
    example: 'asdf45421325c',
    description: 'User google ID',
  })
  @Prop({ type: String})
  googleId?: string;

  @ApiProperty({
    example: 'admin',
    enum: ['admin', 'editor', 'guest'],
    default: "admin",
    description: 'User Role',
  })
  @Prop({ type: String})
  role?: string;
}

export const TeamRosterSchema = SchemaFactory.createForClass(User);
