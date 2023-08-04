import { Body, Controller, Get, Post } from "@nestjs/common";
import { ProdutoRepository } from "./produto.repository";
import { CriaProdutoDTO } from "src/usuario/dto/CriaProduto.dto";

@Controller('/produtos')
export class ProdutosController {
    constructor(private produtoRepository: ProdutoRepository) {}

    @Post()
    async criaProdutos(@Body() dadosDoProduto: CriaProdutoDTO) {
        this.produtoRepository.salvar(dadosDoProduto);
        return dadosDoProduto;
    }

    @Get()
    async listProdutos() {
        return this.produtoRepository.listar();
    }
}