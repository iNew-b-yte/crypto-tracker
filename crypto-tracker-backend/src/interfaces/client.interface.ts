import express from 'express';

export interface Client {
    id: string;
    res: express.Response;
  }