import { Injectable, Logger } from '@nestjs/common';
import axios from 'axios';
import { PassThrough } from 'stream';
import { CreateMovieDto } from './dto/create-movie.dto';
import { UpdateMovieDto } from './dto/update-movie.dto';

@Injectable()
export class MoviesService {
  private readonly logger = new Logger(MoviesService.name);
  OMBb_key = '9ed2556f';
  url = `https://www.omdbapi.com/?apikey=${this.OMBb_key}&s=`;

  moviesCache = [];

  create(createMovieDto: CreateMovieDto) {
    return 'This action adds a new movie';
  }

  findAll() {
    return `This action returns all movies`;
  }

  async findOne(name: string) {
    if (this.moviesCache.find((x) => x.search === name)) {
      this.logger.log('cache');
      return this.moviesCache.find((x) => x.search === name);
    } else {
      this.logger.log('request');
      var response = await axios(this.url + name);
      this.moviesCache.push({ search: name, data: response.data });
      return response.data;
    }
  }

  update(id: number, updateMovieDto: UpdateMovieDto) {
    return `This action updates a #${id} movie`;
  }

  remove(id: number) {
    return `This action removes a #${id} movie`;
  }
}
