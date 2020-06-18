import axios from 'axios'
import aspida from '@aspida/axios'
import api from '~/server/api/$api'

export const apiClient = api(aspida(axios, { baseURL: process.env.BASE_URL }))