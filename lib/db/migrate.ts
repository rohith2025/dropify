import { migrate } from "drizzle-orm/neon-http/migrator";

import {drizzle} from "drizzle-orm/neon-http"
import {neon} from "@neondatabase/serverless"

import * as dotenv from "dotenv"

dotenv.config({path : ".env.local"})

if(!process.env.DATABASE_URL)
{
  throw new Error("Database Url is not set in .env.local")
}

async function runMigration() {
  try{
    const sql = neon(process.env.DATABASE_URL!)
    const db = drizzle(sql)

    await migrate(db,{migrationsFolder : "dirzzle"});
    console.log("All Migrations Done Sucessfully");
  }catch(err){
    console.log(err);
    console.log("All Migrations Not Done Sucessfully");
    process.exit(1);
  }
} 

runMigration();