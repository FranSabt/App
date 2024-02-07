-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "email" TEXT,
    "username" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "first_name" TEXT NOT NULL,
    "second_name" TEXT,
    "last_name" TEXT NOT NULL,
    "celphone" TEXT,
    "is_admin" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TasaBcv" (
    "id" TEXT NOT NULL,
    "tasa" DOUBLE PRECISION NOT NULL,
    "date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "userId" TEXT NOT NULL,

    CONSTRAINT "TasaBcv_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Pagomovil" (
    "id" TEXT NOT NULL,
    "monto_dolares" DOUBLE PRECISION NOT NULL,
    "monto_bolivares" DOUBLE PRECISION NOT NULL,
    "nombre_receptor" TEXT,
    "banco_receptor" TEXT NOT NULL,
    "ci_receptor" TEXT NOT NULL,
    "cel_receptor" TEXT NOT NULL,
    "factura" TEXT,
    "transaccion_exitosa" BOOLEAN NOT NULL,
    "codigo_respuesta" TEXT NOT NULL,
    "codigo_error" TEXT NOT NULL,
    "referencia" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "tasaID" TEXT NOT NULL,

    CONSTRAINT "Pagomovil_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "User_username_key" ON "User"("username");

-- CreateIndex
CREATE UNIQUE INDEX "TasaBcv_userId_key" ON "TasaBcv"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "Pagomovil_userId_key" ON "Pagomovil"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "Pagomovil_tasaID_key" ON "Pagomovil"("tasaID");

-- AddForeignKey
ALTER TABLE "TasaBcv" ADD CONSTRAINT "TasaBcv_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Pagomovil" ADD CONSTRAINT "Pagomovil_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Pagomovil" ADD CONSTRAINT "Pagomovil_tasaID_fkey" FOREIGN KEY ("tasaID") REFERENCES "TasaBcv"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
