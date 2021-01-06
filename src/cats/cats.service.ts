import { Injectable } from '@nestjs/common';
import { Cat } from './interfaces/cat.interface';
import { CreateCatDto } from './dtos/create-cat.dto';

@Injectable()
export class CatsService {
  private readonly cats: Cat[] = [];

  create({ name, type, age }: CreateCatDto): void {
    this.cats.push({
      id: this.cats.length + 1,
      name,
      type,
      age,
    });
  }

  findAll(): Cat[] {
    return this.cats;
  }

  findById(id: number): Cat | undefined {
    const findCat = this.cats.find((cat) => cat.id === id);

    return findCat;
  }
}
