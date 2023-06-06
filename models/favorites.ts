'use strict';

import {
  Model
} from 'sequelize';

interface FavoritesAttributes {
  id: number;
  name: string;
  gender: string;
  species: string;
  status: string;
  origin: string;
  image: string;
}

module.exports = (sequelize:any, DataTypes:any) => {
  class Favorites extends Model<FavoritesAttributes>
  implements FavoritesAttributes {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    id!: number;
    name!:string;
    gender!: string;
    species!: string;
    status!:string;
    origin!: string;
    image!: string;

    static associate(models:any) {
      // define association here
      Favorites.belongsToMany(models.User, {through: "user_favorite"});
    }
  }
  Favorites.init({
    id: {
      type:DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    status: {
      type:DataTypes.ENUM("Alive", "Dead", "unknown"),
    },
    species: {
      type: DataTypes.STRING,
      allowNull: false
   },
    gender: {
      type: DataTypes.ENUM("Female", "Male", "unknown", "Genderless")
    },
    origin: {
      type: DataTypes.STRING,
      allowNull: false
    },
    image: {
      type: DataTypes.STRING
    }
  }, {
    sequelize,
    modelName: 'Favorites',
  });
  return Favorites;
};