import{Prop, Schema, SchemaFactory} from "@nestjs/mongoose";
import { ApiProperty } from "@nestjs/swagger";

@Schema({
    timestamps: false,
    toJSON: {
      transform: function (doc, ret) {
        ret.id = ret._id; // Optional: Map the _id field to id
        delete ret._id; // Exclude the _id field from the output
        delete ret.__v; // Exclude the __v field from the output
      }
    }
  })
  
export class wallets{

    @Prop()
    wallets_name: String;

    @Prop()
    budget: Number;

    @Prop({default: 0})
    spend : Number;

    @Prop()
    left: Number;

    @Prop()
    email: String;

}
export const walletsSchema = SchemaFactory.createForClass(wallets)