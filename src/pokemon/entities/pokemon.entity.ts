import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

// SCHEMA para especificar que es tabla
// DOCUMENT para extender de mongoose
@Schema()
export class Pokemon extends Document{
    // PROP para características de las propiedades
    @Prop({
        unique: true,
        index: true,
    })
    name: string;

    @Prop({
        unique: true,
        index: true,
    })
    no: number;

}

export const PokemonSchema = SchemaFactory.createForClass( Pokemon );