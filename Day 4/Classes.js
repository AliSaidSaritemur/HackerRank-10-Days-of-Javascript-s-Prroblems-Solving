function Polygon(edges){    
    this.perimeter=function(){
        return edges.reduce((perimet,edge)=>{
            perimet+=edge;
            return perimet;
        },0);
    }
}