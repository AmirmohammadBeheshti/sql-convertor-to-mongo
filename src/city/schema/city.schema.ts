import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema({ collection: 'city', virtuals: true, _id: false, timestamps: true })
export class City {
  @Prop({
    type: String,
    required: true,
    lowercase: true,
  })
  _id: string;
  @Prop({ type: String, sparse: true })
  code: string;
  @Prop({ type: String })
  province: string;
  @Prop({ type: String })
  faName: string;
  @Prop({ index: true, type: String })
  enName: string;
}

const CitySchema = SchemaFactory.createForClass(City);

CitySchema.index({ faName: 'text' });

export { CitySchema };
