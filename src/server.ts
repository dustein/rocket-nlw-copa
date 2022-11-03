import Fastify from 'fastify';
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient({
   log: ['query'],
})


async function boostrap() {
   const fastify = Fastify({
      logger: true,
   })

   fastify.get('/pools/count', async () => {

      const count = await prisma.pool.count()

      return { count: 0 }
      
   })


   await fastify.listen({ port :3333})
}

boostrap();