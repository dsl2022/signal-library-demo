function NavBar({filteredTodos}:any){
    return <>
    Total: {filteredTodos.value.length}
    </>
}

export default NavBar;