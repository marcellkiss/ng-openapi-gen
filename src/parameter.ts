import { ParameterLocation, ParameterObject } from 'openapi3-ts';
import { tsComments, tsType } from './gen-utils';
import { Options } from './options';

/**
 * An operation parameter
 */
export class Parameter {

  name: string;
  tsComments: string;
  required: boolean;
  in: ParameterLocation;
  type: string;

  constructor(public spec: ParameterObject, options: Options) {
    this.name = spec.name;
    this.tsComments = tsComments(spec.description || '', 1);
    this.in = spec.in || 'query';
    this.required = this.in === 'path' || spec.required || false;
    this.type = tsType(spec.schema, options);
  }
}