import { IUser } from '../services/User.model';
import { v4, validate as validateUUID } from 'uuid';
import { InvalidUUIDError, NotExistUserError, CrashDataBaseError } from '../Errors/CustomErrors';
import { userValidate } from '../utils/user.validate';

let dataBase: IUser[] = []

const searchUser = (id: string) => {
    if (!validateUUID(id)) throw new InvalidUUIDError(id);
    const correctUser = dataBase.filter(user => user.id == id);
    if (correctUser.length < 1) throw new NotExistUserError(id);
    if (correctUser.length > 1) throw new CrashDataBaseError();
    if (correctUser.length === 1) return correctUser[0];
}

const getAll = () => dataBase;

const create = (user: IUser): Promise<IUser> => {
    userValidate(user);
    return new Promise((resolve) => {
        const id = v4();
        const newUser = { ...user, id };
        dataBase.push(newUser);
        resolve(newUser)
    })
}

const remove = (id: string) => {
    const existingUser = searchUser(id);
    const index = dataBase.indexOf(existingUser as IUser);
    dataBase.splice(index, 1);
};

const update = (id: string, user: IUser) => {
    userValidate(user);
    const existingUser = searchUser(id);
    const index = dataBase.indexOf(existingUser as IUser);
    dataBase[index] = { ...dataBase[index], ...user };
};

export { getAll, create, remove, update, searchUser };