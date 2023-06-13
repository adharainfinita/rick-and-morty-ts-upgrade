import { Model, Table, Column, DataType, Scopes, BelongsToMany } from 'sequelize-typescript';
import Users from './User';
import FavoritesUser from './FavoritesUser';


@Table({
  tableName: 'favorites',
})

@Scopes(() => ({
  users: {
    include: [
      {
        model: Users,
        through: {attributes: []},
      },
    ],
  },
}))

class Favorites extends Model {

  @Column({
    type: DataType.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true
  })
  id!: number;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  name!: string;

  @Column({
    type: DataType.ENUM("Female", "Male", "unknown", "Genderless"),
    allowNull: false,
  })
  gender!: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  species!: string;

  @Column({
    type: DataType.ENUM("Alive", "Dead", "unknown"),
    allowNull: false,
  })
  status!: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  origin!: string

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  image!: string
  
  @BelongsToMany(() => Users, () => FavoritesUser)
  users!: Users[];
  async addUser(user: Users): Promise<void> {
  await this.$add("users", user);
}
}



   
export default Favorites;