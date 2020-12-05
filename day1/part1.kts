import java.io.File
import kotlin.system.exitProcess

// loads all into memory
File("day1.txt").readLines().apply {
    this.forEachIndexed { i, s ->
        this.subList(i+1, this.size).forEach {
            if(it.toLong() + s.toLong() == 2020L) {
                println(it.toLong() * s.toLong())
                exitProcess(0)
            }
        }
    }
}

exitProcess(1)