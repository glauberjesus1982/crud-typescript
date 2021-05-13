import {Request, Response} from 'express';
import {getRepository} from 'typeorm';
import { User } from '../models/User';


export const getUsers = async(req: Request, res: Response): Promise<Response> => {
    const users = await getRepository(User).find();
    return res.json(users);
}

export const getUser = async(req: Request, res: Response): Promise<Response> => {
    const { id } = req.params;
    const results = await getRepository(User).findOne(id);
    return res.json(results);
}

export const createUsers = async(req: Request, res: Response): Promise<Response> => {
   const newUser = getRepository(User).create(req.body);
   const results = await getRepository(User).save(newUser);
    return res.json(results);
}


export const updateUsers = async(req: Request, res: Response): Promise<Response> => {
    const { id } = req.params;
    const user = await getRepository(User).findOne(id);
    if(user){
        getRepository(User).merge(user, req.body);
        const results = await getRepository(User).save(user);
        return res.json(results);
        
    }

     return res.status(404).json({message: 'No one user found'});
 }

 export const deleteUser = async(req: Request, res: Response): Promise<Response> => {
    const { id } = req.params;
    const results = await getRepository(User).delete(id);
    
    return res.json(results);
 }


