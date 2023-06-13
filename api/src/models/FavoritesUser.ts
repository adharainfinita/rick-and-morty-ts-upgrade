import { Model, Table, Column, ForeignKey } from 'sequelize-typescript';
import Favorites from './Favorites';
import Users from './User';




@Table({
    tableName: 'favorites_users',
  })
class FavoritesUser extends Model {
    @ForeignKey (()=> Favorites)
    @Column
    favoriteId!: number

    @ForeignKey (()=> Users)
    @Column
    userId!: number

}

export default FavoritesUser
