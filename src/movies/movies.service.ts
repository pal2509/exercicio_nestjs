import { Injectable } from '@nestjs/common';
import axios from 'axios';
import { CreateMovieDto } from './dto/create-movie.dto';
import { UpdateMovieDto } from './dto/update-movie.dto';

@Injectable()
export class MoviesService {
  OMBb_key = '9ed2556f';
  url = `https://www.omdbapi.com/?apikey=${this.OMBb_key}&s=`;

  create(createMovieDto: CreateMovieDto) {
    return 'This action adds a new movie';
  }

  findAll() {
    return `This action returns all movies`;
  }

  async findOne(name: string) {
    return axios(this.url + name).then((response) => response.data);
  }

  update(id: number, updateMovieDto: UpdateMovieDto) {
    return `This action updates a #${id} movie`;
  }

  remove(id: number) {
    return `This action removes a #${id} movie`;
  }
}
