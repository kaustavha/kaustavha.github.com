import "github.com/Arachnid/solidity-stringutils/strings.sol";

contract PermanentDataStore {
    using strings for *;
    string public s;
    string public data;
    function PermanentDataStore(string _data) public {
        concat(data, _data);
    }
    
    function get() constant returns (string) {
        return data;
    }
    
    function add(string _data) public {
        concat(data, _data);
    }
    
    function clear() public {
        data = "";
    }
    
    function concat(string s1, string s2) {
        data = s1.toSlice().concat(s2.toSlice());
    }
}

