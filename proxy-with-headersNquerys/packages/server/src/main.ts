// eslint-disable-next-line import/no-unassigned-import
// import "reflect-metadata";
// import { promises as fs } from "fs";
// import path from 'path';
import express from "express";
import cors from "cors";
// import depthLimit from "graphql-depth-limit";
// import { ApolloServer, gql } from "apollo-server-express";
// import i18nextMiddleware from "i18next-express-middleware";
import { BIND_PORT } from "./config";
// import { createConnection } from "./db";
// import { createContext } from "./context";
// import { resolvers } from "./resolvers";
// import { createI18n } from "./utils/locale";
// import { ActivityCron } from "./cron/activity";
// import { PerformerCron } from "./cron/performer";
// import { CategoryCron } from "./cron/category";
// import { createElasticsearchConnection } from "./elasticsearch";

import { routes } from "./routes";

// const arts = require.resolve('../../arts');
// const schema = require.resolve("../../schema");
// const client = require.resolve('../../client');

(async () => {
    /**
     * packages/arts/static/*
     * routes http://127.0.0.1:3000/agenda.png
     */
    // const artsStatic = path.resolve(arts, '../static');

    /**
     * packages/client/static/*
     * routes http://127.0.0.1:3000/agenda.png
     */
    // const clientStatic = path.resolve(client, '../../static');

    // const typeDefs = await fs.readFile(schema, "utf-8").then(gql);
    //   const connection = await createConnection();
    // const elasticsearch = await createElasticsearchConnection();

    // Crons
    //   new PerformerCron(connection);
    //   new ActivityCron(connection);
    //   new CategoryCron(connection);

    // Apollo
    // const apollo = new ApolloServer({
    // typeDefs
    // resolvers,
    // context: () => createContext(connection, elasticsearch),
    // validationRules: [depthLimit(5)]
    // });

    // Express
    const app = express()
        .use(cors())
        // .use(express.static(artsStatic))
        // .use(express.static(clientStatic))
        // .use(i18nextMiddleware.handle(createI18n()))
        // .use(apollo.getMiddleware({ path: "/graphql" }));
        .use(routes);

    app.listen({ port: BIND_PORT }, () => {
        // eslint-disable-next-line no-console
        console.log(
            "🎉 GraphQL server is running at " +
            `http://localhost:${BIND_PORT}/graphql`
        );
    });
})();
