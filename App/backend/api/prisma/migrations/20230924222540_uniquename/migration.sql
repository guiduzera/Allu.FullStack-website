/*
  Warnings:

  - A unique constraint covering the columns `[name]` on the table `products` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX `orders_user_id_key` ON `orders`;

-- CreateIndex
CREATE UNIQUE INDEX `products_name_key` ON `products`(`name`);
