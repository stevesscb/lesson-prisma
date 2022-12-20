-- CreateTable
CREATE TABLE "Author" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMPTZ NOT NULL,
    "firstName" VARCHAR(225) NOT NULL,
    "lastName" VARCHAR(225) NOT NULL,

    CONSTRAINT "Author_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Book" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMPTZ NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "publishedYear" DATE NOT NULL,

    CONSTRAINT "Book_pkey" PRIMARY KEY ("id")
);
