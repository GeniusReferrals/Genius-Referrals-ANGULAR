export class APIException extends Error {
  constructor(
    public readonly errorMessage: string,
    public readonly errorCode: number,
    public readonly errorResponse?: unknown
  ) {
    super(errorMessage);
    this.name = 'APIException';
  }
}