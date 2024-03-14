import {Entity, model, property} from '@loopback/repository';

@model()
export class User extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: false,
    required: true,
  })
  user_dni: number;

  @property({
    type: 'string',
    required: true,
  })
  firts_name: string;

  @property({
    type: 'string',
    required: true,
  })
  last_name: string;

  @property({
    type: 'date',
  })
  birth_date?: string;

  @property({
    type: 'string',
    required: true,
  })
  password: string;

  @property({
    type: 'string',
    required: true,
  })
  email: string;

  @property({
    type: 'string',
  })
  gender?: string;

  @property({
    type: 'boolean',
    required: true,
  })
  is_active: boolean;

  @property({
    type: 'number',
    required: true,
  })
  role_id: number;


  constructor(data?: Partial<User>) {
    super(data);
  }
}

export interface UserRelations {
  // describe navigational properties here
}

export type UserWithRelations = User & UserRelations;
