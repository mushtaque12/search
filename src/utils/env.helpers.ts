import { EnvironmentVariables } from '../App.types';
import config from '../config.json';

export const getEnvironmentVariable = (name: EnvironmentVariables) =>
  process.env[name] ?? config[name];
