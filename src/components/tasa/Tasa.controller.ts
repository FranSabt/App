import { prismaConnection } from "../../DB.connection";
import { CreateTasaBcv } from "./ITasa.interface";


export const crearTasa = async (tasa: CreateTasaBcv) => {
  const result = await prismaConnection.tasaBcv.create(tasa);
  return result;
}