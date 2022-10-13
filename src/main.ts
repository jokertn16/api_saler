import { NestFactory } from "@nestjs/core";
import * as fs from "fs";
import { AppModule } from "./app.module";
import {
  FastifyAdapter,
  NestFastifyApplication,
} from "@nestjs/platform-fastify";
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";

const httpsOptions = {
  key: fs.readFileSync("./key.pem"),
  cert: fs.readFileSync("./cert.pem"),
};

async function bootstrap() {
  let app = null;

  if (process.env.SSL === "enable") {
    app = await NestFactory.create<NestFastifyApplication>(
      AppModule,
      new FastifyAdapter({ https: httpsOptions }),
      {
        httpsOptions,
      }
    );
  } else {
    app = await NestFactory.create(AppModule);
  }

  const config = new DocumentBuilder()
    .setTitle("REPORT VERSION 2")
    .setDescription("Danh sách báo cáo mới!")
    .setVersion("1.0")
    .addTag("Order")
    .setBasePath("api")
    .addBearerAuth(
      { type: "http", scheme: "bearer", bearerFormat: "JWT" },
      "access-token"
    ).addBearerAuth()
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup("api", app, document);

  app.enableCors();
  await app.listen(process.env.PORT, "0.0.0.0");
  console.log(
    `Application https:${process.env.SSL} is running on: ${await app.getUrl()}`
  );
}
bootstrap();
