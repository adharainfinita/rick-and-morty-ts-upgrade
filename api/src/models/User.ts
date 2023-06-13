import { Model, Table, Column, DataType, Scopes, BelongsToMany } from 'sequelize-typescript';
import Favorites from './Favorites';
import FavoritesUser from './FavoritesUser';


@Table({
  tableName: 'users',
})

@Scopes(() => ({
  favorites: {
    include: [
      {
        model: Favorites,
        through: {attributes: []},
      },
    ],
  },
}))

class Users extends Model {

  @Column({
    type: DataType.INTEGER,
    allowNull: false,
      primaryKey: true,
      autoIncrement: true
  })
  id!: number

 @Column({
    type: DataType.STRING,
    allowNull: false,
    unique: true,
  })
  email!: string;

   @Column({
    type: DataType.STRING,
    allowNull: false,
    unique: true,
  })
  password!: string;

  @BelongsToMany(() => Favorites, () => FavoritesUser)
  favorites!: Favorites[];
  async addFavorites(favorite: Favorites): Promise<void> {
    await this.$add("favorites", favorite);
  }
}


export default Users;